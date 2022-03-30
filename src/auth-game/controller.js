export const controller = (_call, callback) => {
  const response = { status: 'STATUS_SUCCESS', success: { accessToken: '' } }

  callback(null, response)
}
