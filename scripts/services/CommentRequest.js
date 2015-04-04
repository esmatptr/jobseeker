/**
 * Created by happy on 4/2/2015.
 */

angular.module('servicesModule').factory('CommentRequest', function($http,authenticationService) {
    return {

        addComment: function (commentEntity) {
            var request = {};
            request.opcode = "addCommentRequest";

            request.Entity =  commentEntity;
            var commentPromise = $http({
                method: 'POST',
                url: authenticationService.deploymentLink.link,
                //url: 'server/Jobseeker_Form.php',
                data: request
            });
            return commentPromise;
        }
        ,
        getComment: function () {
            var request = {};
            request.opcode = "getCommentsRequest";

            var commentPromise = $http({
                method: 'POST',
                url: authenticationService.deploymentLink.link,
                //url: 'server/Jobseeker_Form.php',
                data: request
            });
            return commentPromise;
        }



    }});