#pragma strict

static var direcao = false;

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
						direcao = true;
					break;
					case TouchPhase.Stationary:
						direcao = true;
					break;
					case TouchPhase.Moved:
						direcao = true;
					break;
					case TouchPhase.Ended:
						direcao = false;
					break;
				}
			}
		}
	}	
}