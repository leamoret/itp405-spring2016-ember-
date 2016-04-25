import Ember from 'ember';

export default Ember.Route.extend({
  model:function(params) {
    //params is what gets passed in the url in this case username
    //console.log(params);

    return Ember.$.getJSON(`http://itp-api.herokuapp.com/artists/${params.username}`);
  }

});
