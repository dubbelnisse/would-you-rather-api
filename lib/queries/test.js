module.exports = async (_, {}) => {
  try {
    return {
      title: 'test'
    }
  } catch (error) {
    throw new Error(error)
  }
}
