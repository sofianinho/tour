/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

/* Controllers */


angular.module('tour.controllers', []).

// Navigation controller
controller('EditorCtrl', ['$scope', '$routeParams', '$location', 'toc', 'i18n', 'players', 'run', 'fmt', 'editor', 'analytics', 'storage',
    function($scope, $routeParams, $location, toc, i18n, players, run, fmt, editor, analytics, storage) {
        var lessons = [];
        toc.lessons.then(function(v) {
            lessons = v;
            $scope.gotoPage($scope.curPage);

            // Store changes on the current file to local storage.
            $scope.$watch(function() {
                var f = file();
                return f && f.Content;
            }, function(val) {
                if (val) storage.set(file().Hash, val);
            });
        });

        $scope.toc = toc;
        $scope.lessonId = $routeParams.lessonId;
        $scope.curPage = parseInt($routeParams.pageNumber);
        $scope.curFile = 0;
        $scope.job = null;
        $scope.jobType = 'go';

        $scope.nextPageClick = function(event) {
            event.preventDefault();
            $scope.nextPage();
        };
        $scope.prevPageClick = function(event) {
            event.preventDefault();
            $scope.prevPage();
        };
        $scope.nextPage = function() {
            $scope.gotoPage($scope.curPage + 1);
        };
        $scope.prevPage = function() {
            $scope.gotoPage($scope.curPage - 1);
        };
        $scope.gotoPage = function(page) {
            $scope.kill();
            var l = $routeParams.lessonId;
            if (page >= 1 && page <= lessons[$scope.lessonId].Pages.length) {
                $scope.curPage = page;
            } else {
                l = (page < 1) ? toc.prevLesson(l) : toc.nextLesson(l);
                if (l === '') { // If there's not previous or next
                    $location.path('/list');
                    return;
                }
                page = (page < 1) ? lessons[l].Pages.length : 1;
            }
            $location.path('/' + l + '/' + page);
            $scope.openFile($scope.curFile);
            analytics.trackView();
        };
        $scope.openFile = function(file) {
            $scope.curFile = file;
            editor.paint();
        };

        function log(mode, text) {
            $('.output.active').html('<pre class="' + mode + '">' + text + '</pre>');
        }
        
        function logd(mode, text) {
            $('.docker.active').html('');
            $('.docker.active').html('<pre class="' + mode + '">' + text + '</pre>');
        }

        function clearOutput() {
            $('.output.active').html('');
        }

        function file() {
            retFile = lessons[$scope.lessonId].Pages[$scope.curPage - 1].Files[$scope.curFile];
            if (retFile != null) {
                if (retFile.Name.indexOf('Dockerfile') == 0) {
                    $scope.jobType = 'docker';
                } else{
                    $scope.jobType = 'go';
                }
            }
            return retFile;
        }

        $scope.run = function() {
            log('info', i18n.l('waiting'));
            var f = file();
            $scope.job = run(f.Content, $('.output.active > pre')[0], {
                path: f.Name
            }, function() {
                $scope.job = null;
                $scope.$apply();
            });
        };

        $scope.kill = function() {
            if ($scope.job !== null) $scope.job.Kill();
        };

        $scope.play = function(){
            playURL = players.p('pwd-url');
            logd('info', i18n.l('playground')+': '+playURL);
            window.open(playURL, "_blank");
        };

        $scope.format = function() {
            log('info', i18n.l('waiting'));
            fmt(file().Content, editor.imports).then(
                function(data) {
                    if (data.data.Error !== '') {
                        log('stderr', data.data.Error);
                        return;
                    }
                    clearOutput();
                    file().Content = data.data.Body;
                },
                function(error) {
                    log('stderr', error);
                });
        };

        $scope.reset = function() {
            file().Content = file().OrigContent;
        };
    }
]);
