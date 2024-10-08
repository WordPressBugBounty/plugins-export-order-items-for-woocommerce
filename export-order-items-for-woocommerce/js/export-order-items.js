/**
 * Author:      WP Zone
 * License:     GNU General Public License version 2 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 */
jQuery(document).ready(function ($) {
    $('#hm_xoiwc_field_report_time').change(function () {
        $('.hm_xoiwc_custom_time').toggle(this.value == 'custom');
    });
    $('#hm_xoiwc_field_report_time').change();

    $('.variation-field').prop('checked', false).prop('disabled', true);

    // Workaround for lack of HTML5 date field support
    $('#hm_xoiwc_field_report_start, #hm_xoiwc_field_report_end').each(function () {
        if ($(this).prop('type') != 'date') {
            new Pikaday({field: this, format: 'YYYY-MM-DD'});
        }
    });
});