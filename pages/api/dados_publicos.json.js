export default function handler(req, res) {
  res.status(200).json({
    funcionarios: [
      'joão', 'maria', 'pedro'

  ]});
}