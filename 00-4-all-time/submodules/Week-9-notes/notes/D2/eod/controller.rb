def create
  @comment = application.comments.new({
    commenter_id: current_user.id,
    decision_state: application.decision_state,
    body: params[:comment][:body]
  })

  # const comment = new Comment();

  if @comment.save # database save request
    # merging some data to a hash (JS object)
    comment_data = @comment.attributes.merge({
      commenter_name: @comment.commenter.first_name,
      created_at_str: @comment.created_at.strftime("(%D-%I:%M%P)")
    })

    render json: comment_data
  else
    render json: @comment.errors.full_messages, status: 422
  end
end