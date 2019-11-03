/*
 * Tetra Tech
 *  this has been modified so that if a user opens the Identify widget, it turns off the ZoomIn/ZoomOut/and Pan widgets.
 *  
 *  This works by having each widget catch an event called 'clickOther'.
 *  The modification is in the onOpen() function
 *  In the catching widget the modification in in the startup function, and a node is added to catch clickOther
 * 
 * Jimmy Bisese james.bisese@tetratech.com
 */
/*global define, dojo, dijit, require, esri, console, setTimeout*/
define(
	[	
	 	'dojo/_base/declare',
		'jimu/BaseWidget',
		'dojo/_base/html',
		'dojo/on',
		'dojo/dom-construct',
		'dojo/dom-class',
		'esri/toolbars/navigation'
	],
	function(
		declare, 
		BaseWidget, 
		html, 
		on, 
		domConstruct, 
		domClass, 
		Navigation
		) {
		
		var clazz = declare([BaseWidget], {

			name: 'ZoomOut',
			label: 'Zoom Out',
			baseClass: 'jimu-widget-zoomout',

			startup: function() {
				this.inherited(arguments);

				var pnode = domConstruct.toDom("<div class='jimu-widget-zoomout' title='Zoom Out'></div>");
				
				pnode.addEventListener('clickOther', function() {
					if (domClass.contains(pnode,'jimu-state-selected'))
					{
						console.info('clickOther received in ZoomOut.');
						navToolbar.deactivate();
						domClass.remove(pnode, 'jimu-state-selected');
					}
				}, false);

				html.place(pnode, this.domNode);

				function eventFire(el, etype)
				{
					if (el.fireEvent) 
					{
						el.fireEvent('on' + etype);
					}
					else
					{
						var evObj = document.createEvent('Events');
						evObj.initEvent(etype, true, false);
						el.dispatchEvent(evObj);
					}
				}

				var navToolbar = new Navigation(this.map);
				
				on(pnode, 'click', function(evt)
				{
					if (domClass.contains(pnode, 'jimu-state-selected'))
					{
						navToolbar.deactivate()
					}
					else
					{
						/* send a "turn off" message to ZoomIn  */
					/* send a "turn off" message to ZoomIn and Pan */
						  var zoomOtherNode = document.getElementsByClassName('jimu-widget-zoomin')[0];
						  if (typeof(zoomOtherNode) != 'undefined' && zoomOtherNode != null) 
							{
							  var child = zoomOtherNode.childNodes[0];
							  eventFire(child, 'clickOther');
							}
						  var zoomOtherNode = document.getElementsByClassName('jimu-widget-Pan')[0];
						  if (typeof(zoomOtherNode) != 'undefined' && zoomOtherNode != null) 
							{
							  var child = zoomOtherNode.childNodes[0];
							  eventFire(child, 'clickOther');
							} 
						
						navToolbar.activate(Navigation.ZOOM_OUT);
					}
					domClass.toggle(pnode, 'jimu-state-selected');
					console.info('button clicked');
				});
			}
		});

		clazz.hasStyle = true;
		clazz.hasUIFile = false;
		clazz.hasLocale = false;
		clazz.hasConfig = false;
		clazz.inPanel = false;
		
		return clazz;
	}
);