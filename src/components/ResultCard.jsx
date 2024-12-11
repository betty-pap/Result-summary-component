
const ResultCard = ({category, score, icon, backgroundColor, fontColor}) => {
  const cardStyle = {
    backgroundColor: backgroundColor,
    color: fontColor
  };

  return (
    <div className='result-score' style={cardStyle}>
      <img src={icon} alt={`${category} icon`} />
      <h3 className='category-name'>{category}</h3>
      <p className='score'> <span>{score}</span> / 100</p>
    </div>
  )
}

export default ResultCard