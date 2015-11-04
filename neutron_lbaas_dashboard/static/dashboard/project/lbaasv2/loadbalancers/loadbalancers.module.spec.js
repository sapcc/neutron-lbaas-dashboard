/*
 * Copyright 2015 IBM Corp.
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

  describe('LBaaS v2 Load Balancers Module', function() {
    it('should exist', function() {
      expect(angular.module('horizon.dashboard.project.lbaasv2.loadbalancers')).toBeDefined();
    });
  });

  describe('LBaaS v2 Load Balancers Module Base Path', function () {
    var basePath, staticUrl;

    beforeEach(module('horizon.dashboard.project'));
    beforeEach(module('horizon.dashboard.project.lbaasv2'));
    beforeEach(module('horizon.dashboard.project.lbaasv2.loadbalancers'));
    beforeEach(inject(function ($injector) {
      basePath = $injector.get('horizon.dashboard.project.lbaasv2.loadbalancers.basePath');
      staticUrl = $injector.get('$window').STATIC_URL;
    }));

    it('should be defined', function () {
      expect(basePath).toBeDefined();
    });

    it('should be correct', function () {
      expect(basePath).toEqual(staticUrl + 'dashboard/project/lbaasv2/loadbalancers/');
    });
  });

})();