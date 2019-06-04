class PlacesController < ApplicationController
    before_action :get_trip, only:[:show]
    def index
        @trips = Trip.all
        # render :index
    end

    def show
        @trip = Trip.find(params[:id])
    end
end
