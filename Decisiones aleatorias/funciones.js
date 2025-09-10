// primer contenedor   
document.addEventListener('DOMContentLoaded', function() {
  const decisionBtn1 = document.getElementById('decisionBtn1');
  const result1 = document.getElementById('result1');
  
  decisionBtn1.addEventListener('click', function() {
    // Resetear el estado anterior
    result1.className = 'result1';
    result1.innerHTML = '<span class="loading text-gray-400">Pensando...</span>';
    result1.classList.add('show');
    
    // Simular proceso de "decisión"
    setTimeout(() => {
      const decision = Math.random() < 0.5;
      
      if (decision) {
        result1.innerHTML = '<span class="yes">¡SÍ!</span>';
      } else {
        result1.innerHTML = '<span class="no">NO</span>';
      }
      
      // Añadir un pequeño efecto de aparición
      result1.classList.remove('show');
      setTimeout(() => {
        result1.classList.add('show');
      }, 50);
      
    }, 800); // Simular un pequeño retardo para la "decisión"
  });
});


// segundo contenedor 
document.addEventListener('DOMContentLoaded', function() {
  const decisionBtn2 = document.getElementById('btn2');
  const result2 = document.getElementById('result2');
  
  decisionBtn2.addEventListener('click', function() {
 
    // Resetear el estado anterior
    result2.className = 'result2';
    result2.innerHTML = '<span class="loading text-gray-400">Pensando...</span>';
    result2.classList.add('show');
    
    // función de número aleatorio
    function numeroAleatorio(max) {
      return Math.floor(Math.random() * max) + 1;
    }

    setTimeout(() => {
      const max = document.getElementById("min").value;
      if (max > 0) {
        const num = numeroAleatorio(max);
        result2.textContent = num;  // ✅ corregido
        
      } else {
        result2.textContent = "Ingresa un número válido";  // ✅ corregido
      }
      
      // Añadir un pequeño efecto de aparición
      result2.classList.remove('show');
      setTimeout(() => {
        result2.classList.add('show');
      }, 50);
      
    }, 800); // ✅ corregido
  });
});


  