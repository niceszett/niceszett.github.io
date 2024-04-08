window.addEventListener('DOMContentLoaded', function() {
    let menus = document.getElementsByClassName('bkXwyzsk6itNoByCnf7zrtMriqIIC3zL-menu');
    
    for (let i=0; i<menus.length; i++) {
        let menu = menus[i];
        
        let level1Button = menu.getElementsByClassName('bkXwyzsk6itNoByCnf7zrtMriqIIC3zL-level1')[0];
        if ( ! level1Button) {
            continue; // No subpages
        }
        
        let level1Toggle = menu.getElementsByClassName('bkXwyzsk6itNoByCnf7zrtMriqIIC3zL-level1-toggle')[0];

        let toggleHandler = function(e) {
            level1Toggle.classList.toggle('mode-open');
        };
        level1Button.addEventListener('click', toggleHandler);
        
        let handles = menu.getElementsByClassName('bkXwyzsk6itNoByCnf7zrtMriqIIC3zL-level2');
        for (let j=0; j<handles.length; j++) {
            let handle = handles[j];
            
            handle.addEventListener('click', function(e) {
                let openable = handle.parentElement.parentElement;

                // Open
                if ( ! openable.classList.contains('mode-open')) {
                    // First, close any open dropdowns
                    for (let i=0; i<handles.length; i++) {
                        openable.classList.remove('mode-open');
                    }
                    
                    // Then open the current panel
                    openable.classList.add('mode-open'); // Force open on desktop to allow selecting/editing pages
                }
                // Close
                else {
                    openable.classList.remove('mode-open');
                }
            });
        }
    }
});

