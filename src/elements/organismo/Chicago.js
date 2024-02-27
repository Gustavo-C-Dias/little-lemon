function Chicago({tema = 'dark'}) {
  const temaStyleTitle = tema === 'dark' ? 'yellow-color' : 'green-color'
  const temaStyleText = tema === 'dark' ? 'white-color' : ''
  return (
    <div>
      <h1 className={temaStyleTitle}>Little Lemon</h1>
      <h2 className={temaStyleText}>Chicago</h2>
      <p className={temaStyleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default Chicago