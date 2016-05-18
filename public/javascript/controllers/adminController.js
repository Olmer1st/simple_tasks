"use strict";
main_app.controller("adminController", function($scope, $rootScope, $location) {
    $scope.mediaTree = {
        selected:{
            channels:null,
            mcc:null,
            accounts:null,
            campaigns:null
        },
        accordions:[{
            name: "channels",
            title: "Channels",
            status: {
                open: false
            }
        }, {
            name: "mcc",
            title: "MCC",
            status: {
                open: false
            }
        }, {
            name: "accounts",
            title: "Accounts",
            status: {
                open: false
            }
        }, {
            name: "campaigns",
            title: "Campaigns",
            status: {
                open: false
            }
        }],
        data: {
            channels: [
                { name: "Google", channelId: "google" },
                { name: "Facebook", channelId: "facebook" }
            ],
            mcc:[
                { name: "All", channelId: "google", mccId: "m01"},
                { name: "All", channelId: "facebook", mccId: "m02" },
                { name: "Podium", channelId: "google", mccId: "m1" },
                { name: "Blik", channelId: "google", mccId: "m2" }
            ],
            accounts:[  { name: "TestAccount1",  mccId: "m01", accountId:"a1"},
                { name: "TestAccount2", mccId: "m01", accountId:"a2" },
                { name: "TestAccount3", mccId: "m1", accountId:"a3" },
                { name: "TestAccount31", mccId: "m1", accountId:"a4" },
                { name: "TestAccount4", mccId: "m2", accountId:"a5" },
                { name: "TestAccount44", mccId: "m2", accountId:"a6" }
            ],
            campaigns:[{ name: "TestCampaign1",  accountId:"a1", campaignId:"c1"},
                { name: "TestCampaign2", accountId:"a2", campaignId:"c2" },
                { name: "TestCampaign3", accountId:"a3", campaignId:"c3" },
                { name: "TestCampaign4", accountId:"a4" , campaignId:"c4"},
                { name: "TestCampaign5", accountId:"a5", campaignId:"c5" },
                { name: "TestCampaign6", accountId:"a6" , campaignId:"c6"},
                { name: "TestCampaign7",  accountId:"a1", campaignId:"c7"},
                { name: "TestCampaign8", accountId:"a2", campaignId:"c8" },
                { name: "TestCampaign9", accountId:"a3", campaignId:"c9" },
                { name: "TestCampaign10", accountId:"a4" , campaignId:"c10"},
                { name: "TestCampaign11", accountId:"a5", campaignId:"c11" },
                { name: "TestCampaign12", accountId:"a6" , campaignId:"c12"}]
        }

    };

    $scope.getChannelsFilter = function(){
        if($scope.mediaTree.selected.channels){
            return $scope.mediaTree.selected.channels.channelId;
        }
        return null;
    };
});
