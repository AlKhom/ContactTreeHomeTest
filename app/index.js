var app = angular.module("myApp", [])

    .controller("myCtrl", function ($scope) {
        var contacts = [
            {
                id: 1,
                name: "Friends",
                type: "Group",
                contacts: [
                    {id: 2, name: "Udi", type: "Contact"},
                    {id: 3, name: "Tommy", type: "Contact"},
                    {
                        id: 6,
                        name: "Old Friends",
                        type: "Group",
                        contacts: [
                            {id: 7, name: "Itay", type: "Contact"},
                            {id: 10, name: "Sarah", type: "Contact"},
                            {
                                id: 11,
                                name: "Old-old Friends",
                                type: "Group",
                                contacts: [
                                    {id: 12, name: "Mike", type: "Contact"},
                                    {id: 13, name: "George", type: "Contact"}
                                ]
                            },
                        ]
                    },]
            },
            {
                id: 4,
                name: "Family",
                type: "Group",
                contacts: [
                    {id: 5, name: "Roni", type: "Contact"},
                ]
            },
            {id: 8, name: "Ori", type: "Contact"},
        ];

        $scope.contacts = contacts;
        $scope.show1 = false;
        $scope.show2 = false;
        $scope.show3 = false;
        $scope.itemFocused = function (item) {
            $scope.focused = item

        }

    });


