if ('serviceWorker' in navigator) { window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js').then(function(reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function(sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });

})

  navigator.serviceWorker.ready.then(function(reg) {

    reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function(sub) {
      console.log('Endpoint URL: ', sub.endpoint);
    }).catch(function(e) {
      if (Notification.permission === 'denied') {
        console.warn('Permission for notifications was denied');
      } else {
        console.error('Unable to subscribe to push', e);
      }
    });
  })

}

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      const title = 'Did you like TripleOne Somerset?';
      const options = {
        body: 'We noticed that you visited TripleOne Somerset? Did you like it?',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
      };

      reg.showNotification(title, options);
    });
  }
}
setTimeout(displayNotification, 70000)

