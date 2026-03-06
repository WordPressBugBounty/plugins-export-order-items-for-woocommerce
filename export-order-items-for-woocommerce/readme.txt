=== Export Order Items for WooCommerce ===
Contributors:      berrypress
Tags:              woocommerce, orders, order items, line items, sales, report, reporting, export, csv, excel, spreadsheet
Requires at least: 3.5
Requires PHP:      7.3
Tested up to:      6.9
Stable tag:        1.0.16
License:           GPLv3 or later
License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html


Quickly export and download your WooCommerce product orders as a CSV with product, line item, order, and customer data.

== Description ==

**Export the order details for each sale in your WooCommerce store. Simplify order fulfillment, generate accounting reports in a few clicks, and download into CSV format for readability and universal compatibility with Export Order Items.**

Export Order Items is simple to set up and works for generating order reports straight out of the box.

### Order Reporting Features And Benefits
- Sort orders for pulling specific purchase details
- Pull reports based on common range selectors or custom start and end date and time
- Sort by order ID or Product ID in ascending or descending order
- Filter by order status (Pending Payment, Processing, Completed, Cancelled, etc.)
- 18 data fields that can be included in the report
- Export WooCommerce orders to CSV format

### Here’s What You Get When You Upgrade To Pro
- Save your export settings as a preset and reuse your reports
- Conditional logic for setting what is included in your report
- Generate order reports for specific user roles
- Export all sales or sort by category, tag, product ID, and included field
- Exclude or include free items, refunds, and shipping information
- Set what shows on your reports including custom fields, order line item, and variation
- Additional formats including CSV-ASCII, XLS, XLSX, HTML, and HTML Enhanced
- Change field layout, titles, add rows, and set how decimals display
- Advanced compatibility and debug controls
**Want more?** – check out our add-ons for expansion plugins

### Faster Easier Report Creation
We wanted to make exporting WooCommerce orders a fast simple process so we streamlined the process with checkboxes, dropdowns, and toggles. Set your date range, choose how it should be sorted, pick what order status should be included, and set what fields you want to be added in your report.


⭐️⭐️⭐️⭐️⭐️
> “All I needed was a way to pull customer information along with product sales. And this plugin did exactly that right out of the box. Thanks!” `-` [fiberlyone](https://wordpress.org/support/users/fiberlyone/)

⭐️⭐️⭐️⭐️⭐️
> “The Export Order Items plugin has easy to use functions where you can select the categories you want to have in your report – awesome!” `-` [rist](https://wordpress.org/support/users/rist/)

### Export And Share Anywhere
Customize your report with the toggle control settings, configure the formatting, and download your orders as a CSV spreadsheet. Email as an attachment, print it off for order fulfillment, or import it to your favorite spreadsheet software for analysis.

### Is The Pro Version Right For You?
Over 95% of our users find the free version is perfect for their store. Upgrade to Pro if you need more targeted reporting, advanced options, other formats, and unlimited presets for saving all kinds of report layouts.

### Addons & Integrations
Looking to automate your reports, share them on the frontend of your site, or create in-depth sales reports? We have more free and premium reporting tools for WooCommerce.

- [Ninjalytics](https://wordpress.org/plugins/product-sales-report-for-woocommerce/) (Free and [Pro](https://berrypress.com/product/woocommerce/ninjalytics/) - create sales reports for your store
- [Scheduled Email Reports for WooCommerce](https://berrypress.com/product/woocommerce/scheduled-email-reports/) - plugin to automate report sending
- [Frontend Reports for WooCommerce](https://berrypress.com/product/woocommerce/frontend-reports-for-woocommerce/) - display reports on the frontend of your site
- [Extra Product Options Addon](https://berrypress.com/product/woocommerce/extra-product-options-addon/) - export fields from the [WooCommerce Extra Product Options](https://codecanyon.net/item/woocommerce-extra-product-options/7908619) plugin


If you like this plugin, please consider leaving a comment or review.

[BerryPress](https://berrypress.com/) has built a range of powerful plugins for WooCommerce and WordPress. Check out some of our favorites below — and don’t forget to leave a ⭐⭐⭐⭐⭐ review to help others in the community discover them!

- [Export Order Items for WooCommerce](https://wordpress.org/plugins/export-order-items-for-woocommerce/) — Export detailed order data for every sale in your WooCommerce store. Simplify fulfillment, create accounting reports in just a few clicks, and download CSV files for easy sharing and compatibility.
- [Inline Image Upload for BBPress](https://wordpress.org/plugins/image-upload-for-bbpress/) — Add a TinyMCE WYSIWYG editor to BBPress forums and enable inline image uploads, so users can easily attach and display images within their posts.
- [PhotoBerry Studio](https://wordpress.org/plugins/photoberry-studio/) — Create beautiful, customizable product photo galleries directly in your WordPress dashboard.
- [Automatic Product Categories](https://berrypress.com/product/woocommerce/automatic-product-categories/) — Available as a free version and Pro. Automatically assign products to categories based on custom rules, saving you time and keeping your store organized.
- [Live Carts](https://berrypress.com/product/woocommerce/live-carts/) — Available as a free version and Pro. View and analyze live shopping carts in real time to understand user behavior and optimize conversions.
- [Customer Address Change Notification for WooCommerce](https://wordpress.org/plugins/customer-address-change-notification-for-woocommerce/) — Get instant notifications when customers update their shipping or billing address, helping you stay on top of changes and prevent delivery issues.

To view BerryPress's premium WordPress plugins and themes, visit our [WordPress products catalog page](https://berrypress.com/shop/).

Enjoy!


== Installation ==

1. Click "Plugins" > "Add New" in the WordPress admin menu.
2. Search for "Export Order Items".
3. Click "Install Now".
4. Click "Activate Plugin".

Alternatively, you can manually upload the plugin to your wp-content/plugins directory.


== Frequently Asked Questions ==

= Why I see additional decimal places in some fields?

In some cases output may be affected by the limited precision of PHP's floating point numbers (see the warning in the PHP manual: https://www.php.net/manual/en/language.types.float.php). This may occur retrieving values from the database, when the plugin does calculations after retrieving values from the database, such as when a report field consists of two database fields added together, or when calculating the totals row. When this occurs, a tiny fractional error may be introduced each time a calculation is performed, typically less than 0.000000000000001 per calculation or retrieval. This is not likely to affect the accuracy of the output in normal usage where only a few decimal places are used, even if a value has been derived from many calculations such as the totals row in a very long report. However, if output rounding is not in effect, you may see unexpected additional decimal places in some fields in your output. In this case we recommend rounding the output values as needed.


= What’s the difference between Export Order Items and Product Sales Report? =

Export Order Items generates a report with the items from an individual order, specific purchase, or specific customer for order fulfillment or accounting. [Product Sales Report](https://wordpress.org/plugins/product-sales-report-for-woocommerce/) is for creating a report about all your products or a group of products for comparison and sales performance.
= Can I schedule my reports to send automatically? =

We built [Scheduled Email Reports for WooCommerce](https://berrypress.com/product/woocommerce/scheduled-email-reports/) as a premium add-on that can be used to schedule reports from both Export Order Items and Product Sales Report.

= Where can I get your other add-ons for WooCommerce? =

After you install and activate the Export Order Items for WooCommerce plugin, from the Export Order Items tab located in the WooCommerce menu, select add-ons to install free and premium feature upgrades for your ecommerce store.



== Screenshots ==

1. Report generation screen

== Changelog ==

= 1.0.16 March 6, 2026 =
* Update author, tested up to

= 1.0.15 May 16, 2023 =
* Add High Performance Order Tables support (beta)


= 1.0.14 April 21, 2023 =
* Added explanation about line item refunds: "Line item refunds created during the export period (regardless of the original order date) will be included in the export as negative values if the status of the line item refund matches one of the selected order statuses (e.g. Completed), independent of the status of the original order. Note that some of the fields in the Report Fields list will be blank for line item refunds. If you would like to disable this behavior, please check out our Pro plugin, which also applies status filtering differently for line item refunds."

= 1.0.13 April 17, 2023 =
* Security update

= 1.0.12 March 12, 2023 =
* The option to use the report preset's date range settings wasn't working in Scheduled Email Reports

= 1.0.11 =
* Prevent PHP notices when no fields are selected
* Update tested up to values

= 1.0.10 =
* Security fix: Improve browser caching disabling headers

= 1.0.9 =
* Updated WP and WooCommerce tested up to
* Rebranded admin page
* Added a link to plugin settings page
* Updated links
* Added addons tab
* Load styles and js only on the plugin admin page

= 1.0.8 =
* Updated license (GPLv3+); updated WP and WooCommerce tested up to
* Removed social media embeds

= 1.0.7 =
* Fixed incorrect date ranges when using the "Last 7 days" or "Last 30 days" options
* Added future and calendar month date range options

= 1.0.6 =
* Fixed potential incompatibility with order status plugin(s)

= 1.0.4 =
* Bugfix

= 1.0 =
* Initial release

== Upgrade Notice ==

= 1.0.7 =
When using the "Last 7 days" or "Last 30 days" options in previous versions of the plugin, the computed date range included one too many days. We recommend updating immediately to ensure data accuracy.
