/**
 * Created by happy on 4/2/2015.
 */

angular.module('servicesModule').factory('commentRequestService', function($http,authenticationService) {
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
        },

        deleteComment: function(commentId) {
            var request = {};

            request.opcode = "deleteCommentRequest";
            request.commentId =commentId;
            var commentPromise=$http({
                method : 'POST',
                url : authenticationService.deploymentLink.link,
                //url: 'server/Jobseeker_Form.php',
                data: request
            });
            return commentPromise;
        }



    }});