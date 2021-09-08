// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//every file in the api folder is an endpoint
export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
