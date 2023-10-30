const inner = document.querySelector(".inner");
      const left = document.querySelector(".left");
      left.addEventListener("mousemove", handleMousemove, false); // for desktop
      left.addEventListener("touchmove", handleTouchmove, false); // for touch enable e.g. mobile
      
        
      function handleMousemove(event) {
        let { width, height } = this.getBoundingClientRect();
        let xAxis = event.offsetX / width * 100;
        let yAxis = event.offsetY / height * 100;
        inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
      }  
      function handleTouchmove(event) {
       event.preventDefault(); // we don't want to scroll
        var touch = event.touches[0];
        let { width, height } = this.getBoundingClientRect();
        let xAxis = touch.offsetX / width * 100;
        let yAxis = touch.offsetY / height * 100;
        inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
      }