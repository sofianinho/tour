/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Using the tour',
    'description': '<p>Welcome to a tour of the <a href="https://golang.org">Go programming language</a>. The tour covers the most important features of the language, mainly:</p>',
    'lessons': ['welcome']
}, {
    'id': 'install',
    'title': 'Installation',
    'description': '<p>Installing Golang, the IDE, and more.</p>',
    'lessons': ['install']
}, {
    'id': 'basics',
    'title': 'Basics',
    'description': '<p>The starting point, learn all the basics of the language.</p><p>Declaring variables, calling functions, and all the things you need to know before moving to the next lessons.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Methods and interfaces',
    'description': '<p>Learn how to define methods on types, how to declare interfaces, and how to put everything together.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Concurrency',
    'description': '<p>Go provides concurrency features as part of the core language.</p><p>This module goes over goroutines and channels, and how they are used to implement different concurrency patterns.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'off',
    'on': 'on',
    'syntax': 'Syntax-Highlighting',
    'lineno': 'Line-Numbers',
    'reset': 'Reset Slide',
    'format': 'Format Source Code',
    'kill': 'Kill Program',
    'run': 'Run',
    'compile': 'Compile and Run',
    'more': 'Options',
    'toc': 'Table of Contents',
    'prev': 'Previous',
    'next': 'Next',
    'waiting': 'Waiting for remote server...',
    'errcomm': 'Error communicating with remote server.',
    'submit-feedback': 'Send feedback about this page',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/sofianinho/tour',
    'issue-title': 'tour: [REPLACE WITH SHORT DESCRIPTION]',
    'issue-message': 'Change the title above to describe your issue and add your feedback here, including code if necessary',
    'context': 'Context',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
}).

// mapping from the old paths (#42) to the new organization.
// The values have been generated with the map.sh script in the tools directory.
value('mapping', {
    '#1': '/welcome/1', // Hello, 世界
    '#2': '/welcome/2', // Go local
    '#3': '/install/1', // Setup
    '#4': '/install/2', // Editor
    '#5': '/install/3', // More resources
    '#6': '/basics/1', // Packages
    '#7': '/basics/2', // Imports
    '#8': '/basics/3', // Exported names
    '#9': '/basics/4', // Functions
    '#10': '/basics/5', // Functions continued
    '#11': '/basics/6', // Multiple results
    '#12': undefined, // Named results
    '#13': '/basics/8', // Variables
    '#14': '/basics/9', // Variables with initializers
    '#15': '/basics/10', // Short variable declarations
    '#16': '/basics/11', // Basic types
    '#17': '/basics/13', // Type conversions
    '#18': '/basics/15', // Constants
    '#19': '/basics/16', // Numeric Constants
    '#20': '/flowcontrol/1', // For
    '#21': '/flowcontrol/2', // For continued
    '#22': '/flowcontrol/3', // For is Go's "while"
    '#23': '/flowcontrol/4', // Forever
    '#24': '/flowcontrol/5', // If
    '#25': '/flowcontrol/6', // If with a short statement
    '#26': '/flowcontrol/7', // If and else
    '#27': '/flowcontrol/8', // Exercise'#28': '/moretypes/2', // Structs
    '#29': '/moretypes/3', // Struct Fields
    '#30': '/moretypes/1', // Pointers
    '#31': '/moretypes/5', // Struct Literals
    '#32': undefined, // The new function
    '#33': '/moretypes/6', // Arrays
    '#34': '/moretypes/7', // Slices
    '#35': '/moretypes/8', // Slicing slices
    '#36': '/moretypes/9', // Making slices
    '#37': '/moretypes/10', // Nil slices
    '#38': '/moretypes/12', // Range
    '#39': '/moretypes/13', // Range continued
    '#40': '/moretypes/14', // Exercise'#41': '/moretypes/15', // Maps
    '#42': '/moretypes/16', // Map literals
    '#43': '/moretypes/17', // Map literals continued
    '#44': '/moretypes/18', // Mutating Maps
    '#45': '/moretypes/19', // Exercise'#46': '/moretypes/20', // Function values
    '#47': '/moretypes/21', // Function closures
    '#48': '/moretypes/22', // Exercise'#49': '/flowcontrol/9', // Switch
    '#50': '/flowcontrol/10', // Switch evaluation order
    '#51': '/flowcontrol/11', // Switch with no condition
    '#52': undefined, // Advanced Exercise'#53': undefined, // Methods and Interfaces
    '#54': '/methods/1', // Methods
    '#55': '/methods/2', // Methods continued
    '#56': '/methods/3', // Methods with pointer receivers
    '#57': '/methods/4', // Interfaces
    '#58': '/methods/5', // Interfaces are satisfied implicitly
    '#59': '/methods/8', // Errors
    '#60': '/methods/9', // Exercise'#61': '/methods/13', // Web servers
    '#62': '/methods/14', // Exercise'#63': '/methods/15', // Images
    '#64': '/methods/16', // Exercise'#65': undefined, // Exercise'#66': undefined, // Concurrency
    '#67': '/concurrency/1', // Goroutines
    '#68': '/concurrency/2', // Channels
    '#69': '/concurrency/3', // Buffered Channels
    '#70': '/concurrency/4', // Range and Close
    '#71': '/concurrency/5', // Select
    '#72': '/concurrency/6', // Default Selection
    '#73': '/concurrency/7', // Exercise
    '#74': '/concurrency/8', // Exercise
    '#75': '/concurrency/9', // Exercise
    '#76': '/concurrency/10', // Where to Go from here...
});
