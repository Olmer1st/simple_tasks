"use strict";
main_app.controller("loginController",function($scope, $rootScope, $location){
    $scope.selectedMedia = null;

    $scope.makeSelection = function(media) {
        if (media) media.selected = !media.selected;
        if ($scope.selectedMedia) {
            $scope.selectedMedia.selected = false;
            $scope.selectedMedia = null;
        }
        $scope.selectedMedia = media;
    };

    $scope.collapse= function (media) {
        media.collapsed = !media.collapsed;
        var collapsed = $scope.isChildrenHidden(media);
        setVisibilityChildren(media, !collapsed);

    };

    function setVisibilityChildren(media, hidden){
        if(media){
            if(media.hasChildren){
                var nodes = $scope.medias.filter(function (item) {
                    return item.parentId == media._id;
                });
                if(nodes) {
                    for (var i = 0;i<nodes.length;i++){
                        var node= nodes[i];
                        node.hidden = media.collapsed || hidden;
                        setVisibilityChildren(node, media.collapsed || hidden);
                    }
                }
            }
        }

    }
    $scope.isChildrenHidden = function (media) {
        if(media){
            if(media.hasChildren){
                var nodes = $scope.medias.filter(function (item) {
                    return item.parentId == media._id && item.hidden == true;
                });
                return (nodes && nodes.length>0);
            }
        }
        return false;
    }


    $scope.medias= [
        {name: "Google", type: "channel", _id:"google", parentId:null, level:0, hasChildren:true,  hidden: false},
        {name: "ACCOUNT1", type: "account", _id:"a1", parentId:"google", level:1, hasChildren:false, hidden: false},
        {name: "ACCOUNT2", type: "account", _id:"a2", parentId:"google", level:1, hasChildren:false, hidden: false},
        {name: "MCC1", type: "mcc", _id:"mcc1", parentId:"google", level:1, hasChildren:true,  hidden: false},
        {name: "ACCOUNT2", type: "account", _id:"a3", parentId:"mcc1", level:2, hasChildren:false, hidden: false},
        {name: "ACCOUNT3", type: "account", _id:"a4", parentId:"mcc1", level:2, hasChildren:false, hidden: false},
        {name: "MCC2", type: "mcc", _id:"mcc2", parentId:"mcc1", level:2, hasChildren:true,  hidden: false},
        {name: "ACCOUNT4", type: "account", _id:"a4", parentId:"mcc2", level:3, hasChildren:false, hidden: false},
        {name: "ACCOUNT5", type: "account", _id:"a5", parentId:"mcc2", level:3, hasChildren:false, hidden: false},
        {name: "MCC3", type: "mcc", _id:"mcc3", parentId:"google", level:1, hasChildren:true,  hidden: false},
        {name: "ACCOUNT5", type: "account", _id:"a5", parentId:"mcc3", level:2, hasChildren:false, hidden: false},
        {name: "ACCOUNT6", type: "account", _id:"a6", parentId:"mcc3", level:2, hasChildren:false, hidden: false},
        {name: "MCC4", type: "mcc", _id:"mcc4", parentId:"mcc3", level:2, hasChildren:true,  hidden: false},
        {name: "ACCOUNT7", type: "account", _id:"a7", parentId:"mcc4", level:3, hasChildren:false, hidden: false},
        {name: "ACCOUNT8", type: "account", _id:"a8", parentId:"mcc4", level:3, hasChildren:false, hidden: false},
        {name: "MCC5", type: "mcc", _id:"mcc5", parentId:"google", level:1, hasChildren:false,  hidden: false},
        {name: "MCC6", type: "mcc", _id:"mcc6", parentId:"google", level:1, hasChildren:true,  hidden: false},
        {name: "MCC7", type: "mcc", _id:"mcc7", parentId:"mcc6", level:2, hasChildren:true,  hidden: false},
        {name: "MCC8", type: "mcc", _id:"mcc8", parentId:"mcc7", level:3, hasChildren:true,  hidden: false},
        {name: "MCC9", type: "mcc", _id:"mcc9", parentId:"mcc8", level:4, hasChildren:true,  hidden: false},
        {name: "ACCOUNT9", type: "account", _id:"a9", parentId:"mcc9", level:5, hasChildren:false, hidden: false},
        {name: "ACCOUNT10", type: "account", _id:"a10", parentId:"mcc9", level:5, hasChildren:false, hidden: false}
    ]



});
