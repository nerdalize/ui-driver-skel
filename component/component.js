/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/components/node-driver/driver-%%DRIVERNAME%%/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-%%DRIVERNAME%%/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put ember object here
  var computed = Ember.computed;
  var observer = Ember.observer;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: '%%DRIVERNAME%%',
    config: alias('model.%%DRIVERNAME%%Config'),
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: '%%DRIVERNAME%%Config',
        /*'apiUrl': userData['cloudstack_service_url'],
        'expunge': True,
        'httpGetOnly': False,
        'network': '',
        'publicIp': '',
        'serviceOffering': 'Kubernetes Host Instance #1',
        'sshUser': 'nerdalize',
        'timeout': '300',
        'usePortForward': False,
        'usePrivateAddress': True,
        'zone': 'nl-zh1',
        'type': 'nerdalizeConfig',*/
      });

      set(this, 'model.%%DRIVERNAME%%Config', config);
    },


    /*memorySize: computed('config.cpuCount', function () {
      let config = this.get('config')
      return Math.round(10 * config.get('cpuCount') * 1.6) / 10
    }),

    diskSize: computed('config.cpuCount', function () {
      let config = this.get('config')
      return Math.round(10 * config.get('cpuCount') * 15.6) / 10
    }),

    isMasterObserver: observer('config.isMaster', function () {
      let config = this.get('config')
      if (config.get('isMaster') === true) {
        config.set('cpuCount', 2)
      }
    }),

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required');
      }

      // Add more specific errors

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },*/

    // Any computed properties or custom logic can go here
  });
});
