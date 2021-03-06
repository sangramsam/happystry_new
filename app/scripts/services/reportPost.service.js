/**
 * Created by appy-tech-18 on 3/5/17.
 */
'use strict';
angular.module('Happystry.services')
    .factory('Report', function ($http, Settings, $state, $log, $q) {
        function reportPost(postId) {
            var user_id=localStorage.getItem("user_id");
            var deferred = $q.defer();
            $http({
                method: 'PUT',
                url: Settings.BASE_URL + "post/report",
                data: {
                    post_id: postId,
                },
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
            reportPost:reportPost

        }

    });