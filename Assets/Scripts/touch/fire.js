#pragma strict

static var fire = false;

function Start () {

}

function Update () {
	for(var i:int = 0; i < Input.touches.Length; i++){
		var touch: Touch = Input.touches[i];
		var ray = Camera.main.ScreenPointToRay(Input.GetTouch(i).position);
		var hit: RaycastHit = new RaycastHit();
		
		if(Physics.Raycast(ray,hit,1000)){
			if(hit.collider.gameObject == this.gameObject){
				switch(touch.phase){
					case TouchPhase.Began:
						fire = true;
					break;
					case TouchPhase.Ended:
						fire = false;
					break;
				}
			}
		}
	}	
}