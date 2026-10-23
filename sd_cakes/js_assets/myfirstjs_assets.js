
/* ==========================================
   SWEET DELIGHT CAKES - JAVASCRIPT
   ========================================== */

console.log("Welcome to Sweet Delight Cakes!");

document.addEventListener("DOMContentLoaded", function () {
    // CAKE SELECTION AND IMAGE PREVIEW
    const productSelect = document.getElementById("product");
    const cakeImage = document.getElementById("cakeImage");
    const cakeName = document.getElementById("cakeName");
    const cakeDescription = document.getElementById("cakeDescription");

    if (productSelect && cakeImage) {

        const cakeOptions = {
            birthday: {
                name: "Birthday Cake",
                image: "_images/Birthday cake.avif",
                description: "Beautiful cakes for birthdays and celebrations."
            },

            graduation: {
                name: "Graduation Cake",
                image: "_images/Graduation cake.avif",
                description: "Celebrate your graduation with a special cake."
            },

            cupcakes: {
                name: "Cupcakes",
                image: "_images/vanilla cupcake.avif",
                description: "Delicious cupcakes for parties and celebrations."
            },

            customised: {
                name: "Customised Cake",
                image: "_images/customise cake.avif",
                description: "A personalised cake made for your occasion."
            },

            babyshower: {
                name: "Baby Shower Cake",
                image: "_images/baby-shower-cake.avif",
                description: "Beautiful cakes for welcoming a new baby."
            },

            wedding: {
                name: "Wedding Cake",
                image: "_images/wedding cake.avif",
                description: "Elegant cakes for your special wedding day."
            }
        };

        function displaySelectedCake() {
            const selectedCake = cakeOptions[productSelect.value];

            if (!selectedCake) {
                cakeImage.src = "_images/logo.png";
                cakeImage.alt = "Sweet Delight Cakes Logo";

                if (cakeName) {
                    cakeName.textContent = "Your Selected Cake";
                }

                if (cakeDescription) {
                    cakeDescription.textContent =
                        "Please select a cake from the list above.";
                }

                return;
            }

            cakeImage.onerror = function () {
                cakeImage.alt = selectedCake.name + " image unavailable";

                if (cakeDescription) {
                    cakeDescription.textContent =
                        "Image not found. Please check the filename in your _images folder.";
                }
            };

            cakeImage.src = selectedCake.image;
            cakeImage.alt = selectedCake.name;

            if (cakeName) {
                cakeName.textContent = selectedCake.name;
            }

            if (cakeDescription) {
                cakeDescription.textContent = selectedCake.description;
            }
        }

        productSelect.addEventListener("change", displaySelectedCake);
    }

    // 1. Update the copyright year automatically
    const footerParagraph = document.querySelector("footer p");

    if (footerParagraph) {
        footerParagraph.innerHTML =
            "&copy; " + new Date().getFullYear() +
            " Sweet Delight Cakes. All Rights Reserved.";
    }

    // 2. Add hover effects to navigation links
    const navigationLinks = document.querySelectorAll("nav a");
    const currentPage = decodeURIComponent(
        window.location.pathname.split("/").pop()
    );

    navigationLinks.forEach(function (link) {
        link.style.transition = "transform 0.3s ease, color 0.3s ease";

        link.addEventListener("mouseenter", function () {
            link.style.transform = "scale(1.05)";
            link.style.color = "hotpink";
        });

        link.addEventListener("mouseleave", function () {
            link.style.transform = "scale(1)";
            link.style.color = "";
        });

        const linkPage = decodeURIComponent(link.getAttribute("href") || "");

        if (linkPage === currentPage) {
            link.style.fontWeight = "bold";
        }
    });

    // 3. Add hover effects to homepage buttons
    document.querySelectorAll(".home-links a").forEach(function (link) {
        link.style.transition = "transform 0.3s ease";

        link.addEventListener("mouseenter", function () {
            link.style.transform = "scale(1.05)";
        });

        link.addEventListener("mouseleave", function () {
            link.style.transform = "scale(1)";
        });
    });

    // 4. Confirm before visiting the online orders page
    document.querySelectorAll('a[href="online_orders.html"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (!confirm("Would you like to visit our online orders page?")) {
                event.preventDefault();
            }
        });
    });

    // 5. Smooth scrolling for links to sections on the same page
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetSelector = link.getAttribute("href");

            if (!targetSelector || targetSelector === "#") {
                return;
            }

            const target = document.querySelector(targetSelector);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 6. Search for cakes on the Additional Features page
    const cakeSearchForm = document.getElementById("cakeSearchForm");
    const cakeSearchInput = document.getElementById("cakeSearchInput");
    const cakeSearchResults = document.getElementById("cakeSearchResults");

    if (cakeSearchForm && cakeSearchInput && cakeSearchResults) {

        const cakes = [
            {
                name: "Birthday Cakes",
                description: "Beautiful birthday cakes available in different flavours and sizes.",
                price: "R350",
                image: "_images/Birthday cake.avif",
                keywords: "birthday birthdays party celebration"
            },
            {
                name: "Wedding Cakes",
                description: "Elegant wedding cakes designed to suit your special day.",
                price: "R1 500",
                image: "_images/wedding cake.avif",
                keywords: "wedding bride groom marriage"
            },
            {
                name: "Graduation Cakes",
                description: "Creative cakes to celebrate graduation achievements.",
                price: "R450",
                image: "_images/Graduation cake.avif",
                keywords: "graduation graduate achievement school university"
            },
            {
                name: "Cupcakes",
                description: "Fresh cupcakes sold individually or in boxes of 6 and 12.",
                price: "From R25 each",
                image: "_images/vanilla cupcake.avif",
                keywords: "cupcake cupcakes vanilla box"
            },
            {
                name: "Custom Cake Designs",
                description: "Personalised cakes made according to your preferred design.",
                price: "Price on Request",
                image: "_images/customise cake.avif",
                keywords: "custom customised customized personalised personalized design"
            }
        ];

        cakeSearchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchTerm = cakeSearchInput.value.trim().toLowerCase();

            if (!searchTerm) {
                cakeSearchResults.innerHTML =
                    "<p>Please enter a cake name to search.</p>";
                return;
            }

            const matchingCakes = cakes.filter(function (cake) {
                return (
                    cake.name.toLowerCase().includes(searchTerm) ||
                    cake.description.toLowerCase().includes(searchTerm) ||
                    cake.keywords.includes(searchTerm)
                );
            });

            if (matchingCakes.length === 0) {
                const safeSearchTerm = searchTerm
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");

                cakeSearchResults.innerHTML = `
                    <div class="invalid-search">
                        <h3>Sorry! Cake Not Found 💗</h3>
                        <p>Your search for "<strong>${safeSearchTerm}</strong>" did not match any cakes we currently offer.</p>
                        <p>Please check your spelling or try searching for:</p>
                        <ul>
                            <li>Birthday Cakes</li>
                            <li>Wedding Cakes</li>
                            <li>Graduation Cakes</li>
                            <li>Cupcakes</li>
                            <li>Custom Cake Designs</li>
                        </ul>
                        <p>Thank you for visiting Sweet Delight Cakes!</p>
                    </div>
                `;
                return;
            }

            cakeSearchResults.innerHTML = matchingCakes.map(function (cake) {
                return `
                    <article class="cake-result">
                        <img
                            src="${cake.image}"
                            alt="${cake.name}"
                            class="cake-result-image"
                        >
                        <h3>${cake.name}</h3>
                        <p>${cake.description}</p>
                        <p><strong>Price: ${cake.price}</strong></p>
                        <a href="product%20and%20services.html">
                            View Products &amp; Services
                        </a>
                    </article>
                `;
            }).join("");
        });
    }

    // 7. Newsletter subscription
    // A real Formspree form ID is required to receive submissions.
    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        const newsletterEmail =
            newsletterForm.querySelector('input[type="email"]');

        let newsletterStatus =
            newsletterForm.querySelector("#newsletterStatus");

        if (!newsletterStatus) {
            newsletterStatus = document.createElement("p");
            newsletterStatus.id = "newsletterStatus";
            newsletterStatus.setAttribute("role", "status");
            newsletterForm.appendChild(newsletterStatus);
        }

        newsletterForm.addEventListener("submit", async function (event) {
            const action = newsletterForm.getAttribute("action") || "";

            if (
                !action.includes("formspree.io/f/") ||
                action.includes("YOUR_ACTUAL_FORM_ID")
            ) {
                event.preventDefault();

                newsletterStatus.textContent =
                    "Newsletter sign-up is not connected yet. Please connect your Formspree form.";
                newsletterStatus.style.color = "#b00020";
                return;
            }

            event.preventDefault();

            const submitButton = newsletterForm.querySelector(
                'button[type="submit"], input[type="submit"]'
            );

            const originalButtonText = submitButton
                ? (submitButton.textContent || submitButton.value)
                : "";

            if (submitButton) {
                submitButton.disabled = true;

                if (submitButton.tagName === "INPUT") {
                    submitButton.value = "Submitting...";
                } else {
                    submitButton.textContent = "Submitting...";
                }
            }

            newsletterStatus.textContent = "Submitting your email...";
            newsletterStatus.style.color = "#444";

            try {
                const response = await fetch(action, {
                    method: "POST",
                    body: new FormData(newsletterForm),
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    newsletterStatus.textContent =
                        "Thank you for subscribing to Sweet Delight Cakes!";
                    newsletterStatus.style.color = "green";
                    newsletterForm.reset();
                } else {
                    newsletterStatus.textContent =
                        "We could not submit your subscription. Please check the form and try again.";
                    newsletterStatus.style.color = "#b00020";
                }

            } catch (error) {
                newsletterStatus.textContent =
                    "There was a connection problem. Please try again.";
                newsletterStatus.style.color = "#b00020";

            } finally {
                if (submitButton) {
                    submitButton.disabled = false;

                    if (submitButton.tagName === "INPUT") {
                        submitButton.value = originalButtonText;
                    } else {
                        submitButton.textContent =
                            originalButtonText || "Subscribe";
                    }
                }
            }
        });
    }

    // 8. Make phone numbers clickable
    document.querySelectorAll('a[href^="tel:"]').forEach(function (phone) {
        phone.title = "Click to call this number";
    });

    // 9. Make email links easy to identify
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (email) {
        email.title = "Click to send an email";

        email.addEventListener("click", function () {
            console.log("The visitor selected an email link.");
        });
    });

    // 10. Add hover effects to table rows
    document.querySelectorAll("main table").forEach(function (table) {
        table.querySelectorAll("tr").forEach(function (row, index) {
            if (index === 0) {
                return;
            }

            row.addEventListener("mouseenter", function () {
                row.style.backgroundColor = "#ffe4ef";
            });

            row.addEventListener("mouseleave", function () {
                row.style.backgroundColor = "";
            });
        });
    });

    // 11. Make embedded maps responsive
    document.querySelectorAll(".location iframe").forEach(function (map) {
        map.style.maxWidth = "100%";
        map.style.borderRadius = "10px";
    });

});
// AUTOMATIC CAKE PRICE AND DELIVERY CALCULATOR

    const cakeSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const deliverySelect = document.getElementById("deliveryArea");

    if (cakeSelect && quantityInput && deliverySelect) {

        const cakePrices = {
            birthday: 350,
            graduation: 450,
            cupcakes: 25,
            customised: null,
            babyshower: 450,
            wedding: 1500
        };

        const cakePriceDisplay = document.getElementById("cakePrice");
        const quantityDisplay = document.getElementById("displayQuantity");
        const subtotalDisplay = document.getElementById("subtotal");
        const deliveryDisplay = document.getElementById("deliveryFee");
        const totalDisplay = document.getElementById("grandTotal");
        const messageDisplay = document.getElementById("orderMessage");

        function calculateOrder() {

            const selectedCake = cakeSelect.value;
            const quantity = Math.max(
                1,
                parseInt(quantityInput.value, 10) || 1
            );

            const deliveryArea = deliverySelect.value;

            const price = cakePrices[selectedCake];

            let delivery = 0;

            if (deliveryArea === "gauteng") {
                delivery = 150;
            } else if (deliveryArea === "other") {
                delivery = 300;
            }

            quantityDisplay.textContent = quantity;

            if (!selectedCake) {
                cakePriceDisplay.textContent = "0.00";
                subtotalDisplay.textContent = "0.00";
                deliveryDisplay.textContent = delivery.toFixed(2);
                totalDisplay.textContent = "0.00";
                messageDisplay.textContent =
                    "Please select a cake.";
                return;
            }

            if (price === null) {
                cakePriceDisplay.textContent = "Quotation";
                subtotalDisplay.textContent = "Pending";
                deliveryDisplay.textContent = delivery.toFixed(2);
                totalDisplay.textContent = "Pending";
                messageDisplay.textContent =
                    "Please contact us for your customised cake price.";
                return;
            }

            const subtotal = price * quantity;
            const total = subtotal + delivery;

            cakePriceDisplay.textContent = price.toFixed(2);
            subtotalDisplay.textContent = subtotal.toFixed(2);
            deliveryDisplay.textContent = delivery.toFixed(2);
            totalDisplay.textContent = total.toFixed(2);

            if (!deliveryArea) {
                messageDisplay.textContent =
                    "Please select a delivery area to confirm your total.";
            } else if (deliveryArea === "central") {
                messageDisplay.textContent =
                    "Great! Pretoria Central delivery is free.";
            } else if (deliveryArea === "gauteng") {
                messageDisplay.textContent =
                    "Your R150 Gauteng delivery fee has been added.";
            } else if (deliveryArea === "other") {
                messageDisplay.textContent =
                    "Your R300 delivery fee has been added.";
            } else {
                messageDisplay.textContent =
                    "Collection selected. There is no delivery fee.";
            }
        }

        cakeSelect.addEventListener("change", calculateOrder);
        quantityInput.addEventListener("input", calculateOrder);
        deliverySelect.addEventListener("change", calculateOrder);

        calculateOrder();
    }
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Check that all required fields are completed.
    if (!form.reportValidity()) {
        return;
    }

    // Check that a delivery area has been selected.
    if (
        receiveMethod.value === "delivery" &&
        deliveryArea.value === ""
    ) {
        orderNotice.textContent =
            "Please select your delivery area before continuing.";

        deliveryArea.focus();
        return;
    }

    // Calculate the estimated date, three days from today.
    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + 3);

    const formattedDate = estimatedDate.toLocaleDateString("en-ZA", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // Get the customer's name and selected cake.
    const customerName =
        document.getElementById("customerName").value;

    const selectedCake = cakes[cakeType.value];

    // Display the thank-you message.
    document.getElementById("thankYouCustomer").textContent =
        "Hello, " + customerName +
        "! Thank you for ordering from Sweet Delight Cakes.";

    document.getElementById("thankYouDate").textContent =
        "Your " + selectedCake.name +
        " is expected to be ready on " + formattedDate + ".";

    // Display delivery or collection information.
    const methodMessage = receiveMethod.value === "delivery"
        ? "Your cake is expected to be delivered."
        : "Your cake is expected to be ready for collection.";

    document.getElementById("thankYouDelivery").textContent =
        methodMessage + " Please wait for confirmation from our business.";

    // Hide the order form and show the thank-you section.
    form.style.display = "none";

    document.getElementById("thankYouSection").style.display = "block";

    // Move the page to the thank-you message.
    document.getElementById("thankYouSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Allow the customer to place another order.
document.getElementById("newOrderButton").addEventListener("click", function () {
    form.reset();

    form.style.display = "block";

    document.getElementById("thankYouSection").style.display = "none";

    updateCakeImage();
    updateDeliveryFields();
    calculateTotal();

    form.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});