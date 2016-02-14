﻿treeApp.controller('TreeController', ['$scope', function ($scope) {

    function init() {
        $scope.treeNodes = [{
            name: "My Files",
            image: "/app/images/disk.png",
            children: [
                {
                    name: "Music",
                    children: [{
                        name: "Rock",
                        image: "/app/images/rock.png",
                        children: [
                            { name: "The Eagles - Hotel California", image: "/app/images/music-20.png" },
                            { name: "Ozzy Osbourne - Dreamer", image: "/app/images/music-20.png" }
                        ]
                    },
                    {
                        name: "Jazz",
                        image: "/app/images/Jazz.png",
                        children: [
                            { name: "Ray Charles - Hit the road Jack! ", image: "/app/images/music-20.png" },
                            { name: "Louis Prima - Just A Gigolo", image: "/app/images/music-20.png" }
                        ]
                    }]
                },
                {
                    name: "Movies",
                    children: [
                        { name: "Gladiator", image: "/app/images/movie.png" },
                        { name: "The Shawshank Redemption", image: "/app/images/movie.png" },
                    ]
                },
                {
                    name: "Photos",
                    children: [
                        {
                            name: "Sea",
                            image: "/app/images/sea.png",
                            children: [
                                { name: "image 1.jpg", image: "/app/images/sea_img.png" },
                                { name: "image 4.png", image: "/app/images/sea_img.png" }
                            ]
                        },
                        {
                            name: "Mountains",
                            image: "/app/images/mountain.png",
                            children: [
                                { name: "image 1.jpg", image: "/app/images/mountain_img.png" }
                            ]
                        }
                    ]
                },
                {
                    name: "My Files",
                    children: [{
                        name: "Angular books",
                        children: [
                            { name: "Pro AngularJS", image: "/app/images/pdf.png" },
                            { name: "AngularJS: Up and Running", image: "/app/images/pdf.png" },
                        ]
                    }, {
                        name: "Work",
                        children: [
                            { name: "Lost presentation", image: "/app/images/ppt.png", disabled: true },
                            { name: "Requirements", image: "/app/images/word.png" },
                            { name: "TODO list" },
                            { name: "Finances", image: "/app/images/excel.png" },
                        ]
                    },
                    ]
                }
            ]
        }];

        $scope.basicTree = [
{ name: "Node 1", children: [{ name: "Node 1.1" }, { name: "Node 1.2" }] },
{ name: "Node 2", children: [{ name: "Node 2.1" }, { name: "Node 2.2" }] },
        ]

        $scope.customImagesTree = [{
            name: "My Files", image: "/app/images/disk.png",
            children: [{ name: "Pro AngularJS", image: "/app/images/pdf.png" }, { name: "Presentation", image: "/app/images/ppt.png" }
                , { name: "Requirements", image: "/app/images/word.png" }, { name: "TODO list" }]
        }];

        $scope.options = {
            showIcon: true,
            multipleSelect: false,
            expandOnClick: true,
            useTemplate: true,
        }
    }

    init();

    $scope.$on('selection-changed', function (evt, node) {
        $scope.selectedNode = node;
    })

    $scope.addNode = function () {
        if ($scope.selectedNode) {
            if ($scope.selectedNode.children === undefined) {
                $scope.selectedNode.children = [];
            }
            $scope.selectedNode.children.push({ name: $scope.newNodeName });
        }
    }

    $scope.removeNode = function () {
        if ($scope.selectedNode) {
            //TO DO
        }
    }

    $scope.renameNode = function () {
        if ($scope.selectedNode) {
            $scope.selectedNode.name = $scope.newName;
        }
    }
}]);
treeApp.controller('CodeController', ['$scope', function ($scope) {

    $scope.codeVisible = true;
    $scope.toggleCode = function () {
        $scope.codeVisible = !$scope.codeVisible;
    }
}]);
