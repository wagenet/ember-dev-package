module("EmberDevPackage");

test("it's an Ember namespace", function() {
  ok(Ember.DevPackage instanceof Ember.Namespace, 'should be a namespace');
});
