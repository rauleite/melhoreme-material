angular.module('HomeCtrl', [])

	.controller('HomeController', function($scope, $http, $mdSidenav, $log) {

        // ITEM PARA TESTE

		$scope.customer = {
			name: 'Naomi',
			address: '1600 Amphitheatre'
		};


        // BIND COM INPUT SEARCH

		$scope.toggleObject = {item: -1};
		$scope.searchCurso = function(index) {
			$scope.cursoClicado = $scope.menuLista[index].categoria;
			$scope.message = $scope.menuLista[index].categoria;
			$scope.toggleObject.item = index;


		}


		// LEFT SIDE SIDEBAR

		$scope.toggleLeft = function() {
			$mdSidenav('left').toggle()
				.then(function(){
					$log.debug("toggle left is done");
				});
		};
		$scope.close = function() {
			$mdSidenav('left').close()
				.then(function(){
					$log.debug("close LEFT is done");
				});
		};


		//// SCROLL INFINITO
        //
		//// the array which represents the list
		//$scope.items = ["1. Scroll the list to load more"];
		//$scope.loading = true;
        //
		//// this function fetches a random text and adds it to array
		//$scope.more = function(){
		//	$http({
		//		method: "GET",
		//		url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
		//	}).success(function(data, status, header, config){
        //
		//		// returned data contains an array of 2 sentences
		//		for(line in data){
		//			newItem = ($scope.items.length+1)+". "+data[line];
		//			$scope.items.push(newItem);
		//		}
		//		$scope.loading = false;
		//	});
		//};
        //
		//// we call the function twice to populate the list
		//$scope.more();


		// LISTA DE CURSOS

		$scope.cursosLista = [
			{
				img: '/assets/img/angular.jpg',
				nomeCurso: 'Angular JS',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Programação']
			},{
				img: '/assets/img/certificacao.jpg',
				nomeCurso: 'Certificacao Java',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Programação', 'Certificação em TI']
			},{
				img: '/assets/img/design_grafico.jpg',
				nomeCurso: 'Design Gráfico',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Design Gráfico']
			},{
				img: '/assets/img/express.jpg',
				nomeCurso: 'Express JS',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Programação']
			},{
				img: '/assets/img/hardware.png',
				nomeCurso: 'Hardware',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Rede', 'Hardware']
			},{
				img: '/assets/img/html5.jpg',
				nomeCurso: 'Html5',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Web Design', 'Ferramenta de Desenvolvimento']
			},{
				img: '/assets/img/linux.jpg',
				nomeCurso: 'Linux',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Sistema Operacional', 'Segurança', 'Certificação em TI']
			},{
				img: '/assets/img/modelagem.jpg',
				nomeCurso: 'Modelagem',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['3D e Animação']
			},{
				img: '/assets/img/mongo.jpg',
				nomeCurso: 'Mongo',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Banco de Dados']
			},{
				img: '/assets/img/node.jpg',
				nomeCurso: 'Node',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Programação']
			},{
				img: '/assets/img/redes.png',
				nomeCurso: 'Redes',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Rede de Computadores', 'Segurança', 'Hardware']
			},{
				img: '/assets/img/seguranca.png',
				nomeCurso: 'Seguranca',
				descricao: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the",
				tags: ['Segurança', 'Hardware', 'Redes', 'Sistema Operacional']
			},
		]

		// LISTA DE CATEGORIAS
		$scope.menuLista = [
			{
				categoria: 'Programação'
			},{
				categoria: 'Web Design'
			},{
				categoria: 'Rede de Computadores'
			},{
				categoria: 'Sistema Operacional'
			},{
				categoria: 'Banco de Dados'
			},{
				categoria: 'Ferramenta de Desenvolvimento'
			},{
				categoria: 'Hardware'
			},{
				categoria: 'Certificação em TI'
			},{
				categoria: 'Segurança'
			},{
				categoria: '3D e Animação'
			},{
				categoria: 'Design Gráfico'
			},
		];
	});