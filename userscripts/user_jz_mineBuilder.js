addToolsMenuItem('Build mines', Playground3, null, true);
Playground3();
function Playground3()
{
		game.showAlert('Mines builds started'); // 14-21
		var xValuesTitan = [13934, 5228, 5502, 7545, 5238, 13425, 12288, 697,// titan mines
							11804, 7814, 13160, 1224, 13846, 9776, 785, // salpeter mines
							6775, 6420, 6154, 10005, 9735, 10089, // copper mines
							5577, 4956, 5664, 1794, 1613, 1438, // coal mines
							11864, 1739, 1563, 1388, 3081, 768, 12006, 9201, 8668, 9377, // gold mines
							13515, 12997, 11580, 3670, 3672, 2078, 1725, 1907, 1020, 933, // iron mines
							8151, 5484, 7887, 5750, 5837, 5123, 7356, 6059, 5882, 13285, 13373, 3407, 2697 ];// iron mines
		//var xValuesSalp = [11804, 7814, 13160, 1224, 13846, 9776];
		var xValuesDeposit = [];
		var xValuesTemp;
		var CurrentQueue = 0;
		var CurrentQueueFree = 0;
		var QueueTotal = 0;
		swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.GetDeposits_vector().forEach(function(item) {
			try {
				if (item.GetAmount() > 0) {
					xValuesDeposit.push(item.GetGrid());
					//air.Introspector.Console.log(item.GetGrid());
				}
			} catch (edep) {}
		});
		var tQueue = new TimedQueue(1000);
		$.each(swmmo.application.mGameInterface.mHomePlayer.mBuildQueue.GetQueue_vector(), function(i, GetQueue) {
			CurrentQueue++;
		});
		QueueTotal = swmmo.application.mGameInterface.mHomePlayer.mBuildQueue.GetTotalAvailableSlots();
		CurrentQueueFree = QueueTotal - CurrentQueue;
		//air.Introspector.Console.log("BuildingQueueFree: " + CurrentQueueFree);

		$.each(xValuesTitan, function(i, xValues2) {
			try
			{
				//air.Introspector.Console.log("Name vom Gebäude: Grid:(" + xValues2 + ") " + game.zone.GetBuildingFromGridPosition(xValues2).getProductionBuildingName());
				//air.Introspector.Console.log("Nummer vom Gebäude: Grid:(" + xValues2 + ") " + game.zone.GetBuildingFromGridPosition(xValues2).GetBuildingNrFromName());
				//air.Introspector.Console.log("Gebäude in Queue: " + swmmo.application.mGameInterface.mCurrentPlayer.mBuildQueue.IsBuildingAtGridPositionInQueue(xValues2));
				var GetBuildingNrFromName = game.zone.GetBuildingFromGridPosition(xValues2).GetBuildingNrFromName();
				var IsBuildingAtGridPositionInQueue = swmmo.application.mGameInterface.mCurrentPlayer.mBuildQueue.IsBuildingAtGridPositionInQueue(xValues2);
			}
			catch(e)
			{
				//air.Introspector.Console.log("Nicht gefunden: " + xValues2);
				//air.Introspector.Console.log("Gebäude nicht in Queue: " + swmmo.application.mGameInterface.mCurrentPlayer.mBuildQueue.IsBuildingAtGridPositionInQueue(xValues2));
				tQueue.add(function() {
					if (xValuesDeposit.indexOf(xValues2) !== -1) {
						if(CurrentQueueFree > 0 && i < 8)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 69, xValues2, 0, null);
							game.showAlert('Building: Titan');
						}
						else if(CurrentQueueFree > 0 && i > 7 && i < 15)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 63, xValues2, 0, null);
							game.showAlert('Building: Salpeter');
						}
						else if(CurrentQueueFree > 0 && i > 20 && i < 27)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 37, xValues2, 0, null);
							game.showAlert('Building: Coal');
						}
						else if(CurrentQueueFree > 0 && i > 26 && i < 38)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 46, xValues2, 0, null);
							game.showAlert('Building: Gold');
						}
						else if(CurrentQueueFree > 0 && i > 37)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 50, xValues2, 0, null);
							game.showAlert('Building: Iron');
						}
						else if(CurrentQueueFree > 0 && i > 14 && i < 21)
						{
							CurrentQueueFree--;
							//air.Introspector.Console.log("Nicht gefunden: " + xValues2 + "Counter: " + i);
							game.gi.SendServerAction(50, 36, xValues2, 0, null);
							game.showAlert('Building: Copper');
						}
					}
				});
			}
		});
		tQueue.run();
}