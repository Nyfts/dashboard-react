export const fakeLoginRequest = async ({username, password}) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
            status: 200,
            body: {
                message: 'sucesso'
            }
        });
      }, 3000)
  });
}