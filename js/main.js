/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if(toggle && nav)
	{
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
	// Active link
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	// Remove menu mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Show/Hide New Arrivals
const viewAllBtn = document.getElementById('viewAll');
const collapseBtn = document.getElementById('collapseAll');
const collapseContainer = document.querySelector('.collapse-button-container');
const hiddenBoxes = document.querySelectorAll('.new__box.hidden');
let isShowingAll = false;

viewAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isShowingAll = !isShowingAll;
    
    hiddenBoxes.forEach((box, index) => {
        if (isShowingAll) {
            box.style.display = 'block';
            setTimeout(() => {
                box.classList.remove('hidden');
            }, 50 * index);
            // Hiện nút Thu gọn sau khi hiện tất cả sản phẩm
            setTimeout(() => {
                collapseContainer.style.display = 'block';
            }, 50 * hiddenBoxes.length + 100);
        } else {
            box.classList.add('hidden');
            setTimeout(() => {
                box.style.display = 'none';
            }, 300);
            collapseContainer.style.display = 'none';
        }
    });
    
    viewAllBtn.textContent = isShowingAll ? 'Thu gọn' : 'Xem thêm';
});

// Xử lý nút Thu gọn ở cuối trang
collapseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isShowingAll = false;
    
    hiddenBoxes.forEach((box, index) => {
        box.classList.add('hidden');
        setTimeout(() => {
            box.style.display = 'none';
        }, 300);
    });
    
    collapseContainer.style.display = 'none';
    viewAllBtn.textContent = 'Xem thêm';
    
    // Scroll lên đầu section
    document.getElementById('new').scrollIntoView({ behavior: 'smooth' });
});