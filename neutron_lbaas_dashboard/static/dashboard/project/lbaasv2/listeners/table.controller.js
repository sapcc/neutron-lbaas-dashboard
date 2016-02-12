/*
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  'use strict';

  angular
    .module('horizon.dashboard.project.lbaasv2.listeners')
    .controller('ListenersTableController', ListenersTableController);

  ListenersTableController.$inject = [
    'horizon.app.core.openstack-service-api.lbaasv2',
    '$routeParams',
    'horizon.dashboard.project.lbaasv2.listeners.actions.rowActions'
  ];

  /**
   * @ngdoc controller
   * @name ListenersTableController
   *
   * @description
   * Controller for the LBaaS v2 listeners table. Serves as the focal point for table actions.
   *
   * @param api The LBaaS V2 service API.
   * @param $routeParams The angular $routeParams service.
   * @param rowActions The listener row actions service.
   * @returns undefined
   */

  function ListenersTableController(api, $routeParams, rowActions) {

    var ctrl = this;
    ctrl.items = [];
    ctrl.src = [];
    ctrl.checked = {};
    ctrl.loadbalancerId = $routeParams.loadbalancerId;
    ctrl.rowActions = rowActions.init(ctrl.loadbalancerId);

    init();

    ////////////////////////////////

    function init() {
      api.getListeners(ctrl.loadbalancerId).success(success);
    }

    function success(response) {
      ctrl.src = response.items;
    }

  }

})();