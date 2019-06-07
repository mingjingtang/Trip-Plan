class PlacesController < ApplicationController
    def index
        if params[:user_id].present?
            @user = User.find(params[:user_id])
            @trips = @user.trips
            @trip = Trip.find(params[:trip_id])
            @places = @trip.places
            render json: @places, status: :ok
        else
            @places = Place.all
            render json: @places, status: :ok
        end    
    end
    
    def show
        @place = Place.find(params[:id])
        render json: @place, status: :ok
    end 

    def update
        # @user = User.find(params[:user_id])
        @place = Place.find(params[:id])
        
        if @place.update(place_params)
          render json: @place, status: :ok
        else
          render json: { errors: @place.errors }, status: :unprocessable_entity
        end
    end

    private
      def place_params
        params.permit(:name, :region, :image)
      end
end
