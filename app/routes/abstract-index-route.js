export default Ember.Route.extend(Ember.SimpleAuth.AuthenticatedRouteMixin, {
    newButtonAction: null,
    newButtonText: null,
    pageTitle: null,
    
    setupController: function(controller, model) {
        controller.set('hasRecords', (model.get('length') > 0));
        var sectionDetails = {
            currentScreenTitle: this.get('pageTitle')
        };
        if (!Ember.isEmpty(this.get('newButtonAction'))) {
            sectionDetails.newButtonAction = this.get('newButtonAction');
        }
        if (!Ember.isEmpty(this.get('newButtonText'))) {
            sectionDetails.newButtonText = this.get('newButtonText');
        }
        this.send('setSectionHeader', sectionDetails);
        this._super(controller, model);
    }
});