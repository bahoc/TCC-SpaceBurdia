#pragma strict

var bEsquerda : Transform;
var bDireita : Transform;
var bCima : Transform;
var bBaixo : Transform;
var bTiro : Transform;

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
						controle.jogo = true;
						M_controle.vel = 2;
						Instantiate(bEsquerda, new Vector3(-4.9,-4.91,-11.98), Quaternion.identity);
						Instantiate(bDireita, new Vector3(-3.54,-4.91,-11.98), Quaternion.identity);
						Instantiate(bCima, new Vector3(-4.25,-4.91,-11.25), Quaternion.identity);
						Instantiate(bBaixo, new Vector3(-4.25,-4.91,-12.73), Quaternion.identity);
						Instantiate(bTiro, new Vector3(4.91,-4.91,-12.49), new Quaternion(0,180.0f,0,0));
						Destroy(GameObject.Find("titulo"));
						Destroy(gameObject);
					break;
				}
			}
		}
	}	
}