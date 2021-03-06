/**
 * Created by appy-tech-18 on 3/5/17.
 */
'use strict';
angular.module('Happystry.services')
    .factory('OTP', function ($http, Settings, $state, $log, $q) {
        function getOTP(user) {
            var user_id=localStorage.getItem("user_id");
            //console.log("inside factory",user);
            var deferred = $q.defer();
            $http({
                method: 'put',
                url: Settings.BASE_URL+ 'user',
                data:user,
                headers: {
                    'Content-Type': 'application/json',
                    'User-Id':user_id,
                    'HAPPI-API-KEY': 'TRR36-PDTHB-9XBHC-PPYQK-GBPKQ'
                }
            }).then(function (response, status, headers, config) {
                deferred.resolve({
                    status: status,
                    data: response.data
                });
            }, function (response, status, headers, config) {
                deferred.reject({
                    status: status,
                    data: response.data
                });
            });
            return deferred.promise;
        };


        return {
            getOTP: getOTP
        }

    });