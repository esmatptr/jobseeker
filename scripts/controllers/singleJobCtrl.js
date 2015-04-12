/**
 * Created by rana on 3/31/2015.
 */


angular.module('myApp').controller('singleJobCtrl',
    function($scope, jobEntitiesService, jobRequestsService,$routeParams, authenticationService) {

        //hide the edit div
        $('#editJob').hide();
        $scope.jp_id= authenticationService.userProfile.provider_id;
        $scope.jobId=$routeParams.jobId;

        //alert($scope.jobId);

        $scope.dis = true;
        $scope.toggle = function () {
            $scope.dis = false;
        }

        $scope.update = function () {
            $scope.dis = true;

            var jobEntity = jobEntitiesService.updateJobEntity($scope.jobTitle, $scope.jobDescription,$scope.jobTag, $scope.jobId);

            var jobPromise = jobRequestsService.updateJob(jobEntity);}

        var jobPromise = jobRequestsService.getSingleJob($scope.jobId);


        jobPromise.then(function (d) {
            console.log(d);
            var job= d.data;
            $scope.jobId= job.jobId;
            $scope.jobTitle= job.jobTitle;
            $scope.jobDescription= job.jobDescription;
            $scope.jobTag= job.jobTag;
            $scope.providerId=job.providerId;
            $scope.publishDate=job.publishDate;


        }, function (d) {
            swal({
                title: "Error!",
                text: "Something went wrong, please try again later",
                type: "error"
            });
        });


        //$scope.dis = true;
        $scope.toggle = function () {
            if($scope.dis)
                $('#editJob').show();
            else
                $('#editJob').hide();
            $scope.dis=!$scope.dis;
        }

        $scope.update = function () {
            $scope.dis = true;
            $('#editJob').hide();

            var jobEntity = jobEntitiesService.updateJobEntity($scope.jobTitle, $scope.jobDescription,$scope.jobtag, $scope.jobId);

            var jobPromise = jobRequestsService.updateJob(jobEntity);
        }

    });
