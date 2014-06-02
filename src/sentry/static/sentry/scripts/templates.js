(function(app){
    "use strict";

    app.templates = {
        // group: '' +
        //     '<div class="count" data-count="<%= app.utils.formatNumber(count) %>">' +
        //         '<span title="<%= count %>"><%= app.utils.formatNumber(count) %></span>' +
        //     '</div>' +
        //     '<div class="details">' +
        //         '<h3><a href="<%= permalink %>"><%= title %></a></h3>' +
        //         '<p class="message">' +
        //             '<%= message %>' +
        //         '</p>' +
        //         '<div class="meta">' +
        //             '<% $.each(annotations, function(_, tag) { %>' +
        //             '<span class="tag annotation" data-tag="<%= tag.label %>" data-count="<%= app.utils.formatNumber(tag.count) %>">' +
        //                 '<i><%= tag.label %></i>' +
        //                 '<span title="<%= count %>"><%= app.utils.formatNumber(tag.count) %></span>' +
        //             '</span>' +
        //             '<% }) %>' +
        //             '<span class="last-seen pretty-date"></span>' +
        //             '<% if (timeSpent) { %>' +
        //                 '<span class="tag time-spent"><%= Math.round(timeSpent) %>ms</span>' +
        //             '<% } %>' +
        //             '<span class="tag tag-project">' +
        //                 '<a href="<%= projectUrl %>"><%= project.name %></a>' +
        //             '</span>' +
        //             '<span class="tag tag-logger">' +
        //                 '<a href="<%= loggerUrl %>"><%= logger %></a>' +
        //             '</span>' +
        //             '<% _.each(versions, function(version){ %> ' +
        //                 '<span class="tag tag-version"><%= version %></span>' +
        //             '<% }) %>' +
        //             '<% _.each(tags, function(tag){ %> ' +
        //                 '<span class="tag"><%= tag %></span>' +
        //             '<% }) %>' +
        //         '</div>' +
        //         '<span class="sparkline"></span>' +
        //         '<ul class="actions">' +
        //             '<% if (canResolve) { %>' +
        //                 '<li>' +
        //                     '<a href="#" data-action="resolve">' +
        //                         '<i aria-hidden="true" class="icon-checkmark"></i>' +
        //                     '</a>' +
        //                 '</li>' +
        //                 '<li>' +
        //                     '<a href="#" data-action="bookmark" class="bookmark" title="Bookmark">' +
        //                         '<i aria-hidden="true" class="icon-star"></i>' +
        //                     '</a>' +
        //                 '</li>' +
        //             '<% } %>' +
        //         '</ul>' +
        //     '</div>'
        group: '' +
            '<div class="event-details event-cell">' +
                '<div class="checkbox">' +
                    '<input type="checkbox">' +
                '</div>' +
                '<h3><a href="<%= permalink %>"><%= title %></a></h3>' +
                '<div class="event-meta">' +
                    '<% if (timeSpent) { %><time><%= Math.round(timeSpent) %>ms</time> &middot;<% } %>' +
                    '<span class="message"><%= message %></span>' +
                '</div>' +
            '</div>' +
            '<div class="hidden-md hidden-sm hidden-xs event-graph align-right event-cell">' +
                '<span class="sparkline"></span>' +
            '</div>' +
            '<div class="hidden-xs event-occurrences align-right event-cell"><span><%= app.utils.formatNumber(count) %></span></div>' +
            '<div class="hidden-xs event-users align-right event-cell"><span>209</span></div>'
    };
}(app));
