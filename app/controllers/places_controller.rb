class PlacesController < ApplicationController
    def index 
        # render plain:"welcome to trip plan"
        render :index
        # render json: {hello: "world"}
    end

end
