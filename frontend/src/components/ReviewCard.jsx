import Stars from './Stars'

function ReviewCard({ review }) {
  const date = new Date(review.created_at).toLocaleDateString()

  return (
    <article className="card review-card">
      <div className="review-top">
        <div>
          <h3>{review.name}</h3>
          <span className={`tag ${review.review_type}`}>
            {review.review_type === 'resident' ? 'Lives here' : 'Toured'}
          </span>
          <span className="muted"> {date}</span>
        </div>
        <Stars rating={review.rating} />
      </div>

      {review.pros && <p><strong>Pros:</strong> {review.pros}</p>}
      {review.cons && <p><strong>Cons:</strong> {review.cons}</p>}

      {(review.agent_name || review.agent_notes) && (
        <div className="agent-box">
          <p><strong>Leasing agent:</strong> {review.agent_name || 'Not named'}</p>
          {review.agent_notes && <p>{review.agent_notes}</p>}
        </div>
      )}

      {review.photo_url && (
        <img src={review.photo_url} alt={`Photo from ${review.name}`} className="review-photo" />
      )}
    </article>
  )
}

export default ReviewCard
