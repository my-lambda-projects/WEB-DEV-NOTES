class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def index 
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def update
    todo = Todo.find_by(id: params[:id])

    if todo && todo.update_attributes 
      render json: todo
    else
      render json: todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find_by(id: params[:id])
    
    if todo && todo.destroy
      render json: todo
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end


end
