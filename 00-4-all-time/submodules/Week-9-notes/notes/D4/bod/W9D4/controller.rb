def create
  @comment = application.comments.new({
    commenter_id: current_user.id,
    decision_state: application.decision_state,
    body: params[:comment][:body]
  })
  # @comment = new Comment();

  # .save is a database ping
  if @comment.save 
    # .merge sets up hash (object) to send back to frontend
    comment_data = @comment.attributes.merge({
      commenter_name: @comment.commenter.first_name,
      created_at_str: @comment.created_at.strftime("(%D-%I:%M%P)")
    })

    render json: comment_data
  else
    render json: @comment.errors.full_messages, status: 422
  end
end