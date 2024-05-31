//publication


  document.addEventListener("DOMContentLoaded", function() {
      let publications = [
          { auteur: "Salima Bourbia, Ayoub Karine, Aladine Chetouani, Mohammed El Hassouni, Maher Jridi.", titre: "Deep Learning Multi-View Fusion for Blind 3D Point Cloud Quality Assessment.", date: "Dec 2023", lieu: "Affinity Workshop NAML (North Africans in Machine Learning Workshop) of NeurIPS 2023, New Orleans, United States", type: "article" },
          { auteur: "Sameh Samir, Taheni Damak, Matthieu Saumard, Mohamed Ali Ben Ayed, Maher Jridi, et al.", titre: "Performance analysis of MTS on the VVC encoder.", date: "2023", lieu: "Signal, Image and Video Processing, 2023, ⟨10.1007/s11760-023-02867-7⟩", type: "com" },
          { auteur: "Mélissa Hanafi-Portier, Sarah Samadi, Laure Corbari, Marion Boulard, Elda Miramontes, et al.", titre: "Multiscale spatial patterns and environmental drivers of seamount and island slope megafaunal assemblages along the Mozambique channel.", date: "2023", lieu: "Deep Sea Research Part I: Oceanographic Research Papers, 2023, pp.104198. ⟨10.1016/j.dsr.2023.104198⟩", type: "com" },
          { auteur: "Salima Bourbia, Ayoub Karine, Aladine Chetouani, Mohammed El Hassouni, Maher Jridi.", titre: "Multi-stream POINTNet-based Model For Blind Geometric Point Cloud Quality Assessment.", date: "Sep 2023", lieu: "20th International Conference on Content-based Multimedia Indexing, Orléans, France", type: "article" },
          { auteur: "Salima Bourbia, Ayoub Karine, Aladine Chetouani, Mohammed El Hassouni, Maher Jridi.", titre: "Évaluation de la qualité de nuages de points 3D sans référence en utilisant un transformer et la saillance visuelle.", date: "Aug 2023", lieu: "Colloque Francophone de Traitement du Signal et des Images (GRETSI) 2023, Grenoble, France", type: "article" }
      ];
  
      function renderPublications(filteredPublications) {
          var publicationsContainer = document.getElementById('publications');
          publicationsContainer.innerHTML = '';
          for (var i = 0; i < filteredPublications.length; i++) {
              var pub = filteredPublications[i];
              var p = document.createElement('p');
              p.innerHTML = pub.auteur + ' ' + pub.titre + ' ' + pub.lieu + ' ' + pub.date;
              
              
              publicationsContainer.appendChild(p);
             
            }
        }
  
      function contains(substring, string) {
          var found = false;
          for (var i = 0; i <= string.length - substring.length; i++) {
              var match = true;
              for (var j = 0; j < substring.length; j++) {
                  if (string[i + j] !== substring[j]) {
                      match = false;
                  }
              }
              if (match) {
                  found = true;
              }
          }
          return found;
      }
  
      function filterPublications(event) {
          event.preventDefault();
          var type = document.querySelector('input[name="type"]:checked');
          if (type) {
              type = type.value;
          } else {
              type = 'toutes';
          }
  
          var name = document.getElementById('name').value.toLowerCase();
          var titre = document.getElementById('titre').value.toLowerCase();
          var annee = document.getElementById('annee').value;
  
          var filteredPublications = [];
          for (var i = 0; i < publications.length; i++) {
              var pub = publications[i];
              var match = true;
  
              if (type !== 'toutes') {
                  if (pub.type !== type) {
                      match = false;
                  }
              }
  
              if (match && name !== '') {
                  var nameFound = false;
                  for (var k = 0; k <= pub.auteur.toLowerCase().length - name.length; k++) {
                      var nameMatch = true;
                      for (var l = 0; l < name.length; l++) {
                          if (pub.auteur.toLowerCase()[k + l] !== name[l]) {
                              nameMatch = false;
                          }
                      }
                      if (nameMatch) {
                          nameFound = true;
                      }
                  }
                  if (!nameFound) {
                      match = false;
                  }
              }
  
              if (match && titre !== '') {
                  var titreFound = false;
                  for (var m = 0; m <= pub.titre.toLowerCase().length - titre.length; m++) {
                      var titreMatch = true;
                      for (var n = 0; n < titre.length; n++) {
                          if (pub.titre.toLowerCase()[m + n] !== titre[n]) {
                              titreMatch = false;
                          }
                      }
                      if (titreMatch) {
                          titreFound = true;
                      }
                  }
                  if (!titreFound) {
                      match = false;
                  }
              }
  
              if (match && annee !== '') {
                  var anneeFound = false;
                  for (var o = 0; o <= pub.date.length - annee.length; o++) {
                      var anneeMatch = true;
                      for (var p = 0; p < annee.length; p++) {
                          if (pub.date[o + p] !== annee[p]) {
                              anneeMatch = false;
                          }
                      }
                      if (anneeMatch) {
                          anneeFound = true;
                      }
                  }
                  if (!anneeFound) {
                      match = false;
                  }
              }
  
              if (match) {
                  filteredPublications.push(pub);
              }
          }
  
          renderPublications(filteredPublications);
      }
  
      document.getElementById('filterForm').addEventListener('submit', filterPublications);
  
      renderPublications(publications);
   });
  