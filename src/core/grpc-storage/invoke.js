import { Subject } from 'rxjs'

const handleResult = subject => (error, response) => {
  if (error) subject.error(error)
  if (response) subject.next(response)

  subject.complete()
}

export const invoke = service => (rpc, message) => {
  const subject = new Subject()

  service[rpc](message, handleResult(subject))

  return subject.asObservable()
}
