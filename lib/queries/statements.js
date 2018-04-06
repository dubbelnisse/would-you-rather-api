module.exports = async (_, {}, { postgresAdapter }) => {
  try {
    const { rows } = await postgresAdapter.query('SELECT * FROM statements')

    return rows
  } catch (error) {
    throw new Error(error)
  }
}
