class TripsController < ApplicationController

    # /users/:user_id/trips

    def index
        @user = User.find(params[:user_id])
        @trips = @user.trips
        render json: @trips, include: :user, status: :ok
    end

    def show
        @trip = Trip.find(params[:id])
        render json: @trip, include: :user, status: :ok
    end

    def create
        @user = User.find(params[:user_id])
        @trip = Trip.new(trip_params)
        
        if @trip.save
        #   @user.trips.push(@trip)
          render json: @trip, status: :created
        else
          render json: { errors: @trip.errors }, status: :unprocessable_entity
        end
    end

    def update
        @user = User.find(params[:user_id])
        @trip = Trip.find(params[:id])
        
        if @trip.update(trip_params)
          render json: @trip, status: :ok
        else
          render json: { errors: @trip.errors }, status: :unprocessable_entity
        end
    end


    def destroy
        @trip = Trip.find(params[:id])
        @trip.destroy
        head :no_content
    end
    

      private
      def trip_params
        params.require(:trip).permit(:name, :category, :region, :user_id)
      end

end
