import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://itp-api.herokuapp.com/artists');

    // $api = Ember.$.getJSON('http://itp-api.herokuapp.com/artists');
    // $artists = $api.artists;
    // return $artists;

  }

});
