(function(){jQuery(function(e){return e(document).delegate("#batch_actions_selector li a","click.rails",function(){return e("#batch_action").val(e(this).attr("data-action")),e("#collection_selection").submit()}),e("#batch_actions_selector").length&&e(":checkbox.toggle_all").length?(e(".paginated_collection table.index_table").length?e(".paginated_collection table.index_table").tableCheckboxToggler():e(".paginated_collection").checkboxToggler(),e(".paginated_collection").find(":checkbox").bind("change",function(){return e("#batch_actions_selector").aaDropdownMenu(e(".paginated_collection").find(":checkbox").filter(":checked").length>0?"enable":"disable")})):void 0})}).call(this);