document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.enlaces_navegacion[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".seccion_guia")
  const navLinks = document.querySelectorAll('.enlaces_navegacion[href^="#"]')

  function updateActiveLink() {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActiveLink)
  updateActiveLink()
})

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".boton_hamburguesa")
  const navLinksContainer = document.querySelector(".contenedor_links")

  if (mobileMenuBtn && navLinksContainer) {
    // Toggle menu
    mobileMenuBtn.addEventListener("click", () => {
      navLinksContainer.classList.toggle("show")
      mobileMenuBtn.textContent = navLinksContainer.classList.contains("show") ? "✕" : "☰"
    })
    
    const navLinkItems = document.querySelectorAll(".contenedor_links .enlaces_navegacion")
    navLinkItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("show")
        mobileMenuBtn.textContent = "☰"
      })
    })
  }
})
